// Naver Cloud Platform Maps Geocoding / Reverse Geocoding 프록시.
// Client Secret을 클라이언트 JS에 노출하지 않기 위해 서버(Vercel Serverless Function)에서만 호출한다.
// 필요한 환경변수(Vercel 프로젝트 설정 > Environment Variables):
//   NCP_CLIENT_ID     = Maps 애플리케이션의 Client ID (X-NCP-APIGW-API-KEY-ID)
//   NCP_CLIENT_SECRET = Maps 애플리케이션의 Client Secret (X-NCP-APIGW-API-KEY)

export default async function handler(req, res) {
  const clientId = process.env.NCP_CLIENT_ID;
  const clientSecret = process.env.NCP_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    res.status(500).json({ error: 'server_not_configured', message: 'NCP_CLIENT_ID / NCP_CLIENT_SECRET 환경변수가 설정되지 않았습니다.' });
    return;
  }

  const headers = {
    'x-ncp-apigw-api-key-id': clientId,
    'x-ncp-apigw-api-key': clientSecret,
    Accept: 'application/json',
  };

  try {
    const { query, lat, lng } = req.query;

    if (lat && lng) {
      // 역지오코딩: 좌표 → 행정동 이름
      const url = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=${encodeURIComponent(lng)},${encodeURIComponent(lat)}&orders=admcode&output=json`;
      const r = await fetch(url, { headers });
      const data = await r.json();
      const area = data?.results?.[0]?.region;
      if (!area) {
        res.status(200).json({ dong: null, raw: data });
        return;
      }
      const dong = [area.area1?.name, area.area2?.name, area.area3?.name].filter(Boolean).join(' ');
      res.status(200).json({ dong, lat: Number(lat), lng: Number(lng) });
      return;
    }

    if (query) {
      // 지오코딩: 주소/건물명 검색 → 후보 목록
      const url = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(query)}`;
      const r = await fetch(url, { headers });
      const data = await r.json();
      const results = (data?.addresses || []).slice(0, 8).map(a => ({
        roadAddress: a.roadAddress,
        jibunAddress: a.jibunAddress,
        lat: Number(a.y),
        lng: Number(a.x),
      }));
      res.status(200).json({ results });
      return;
    }

    res.status(400).json({ error: 'missing_params', message: 'query 또는 (lat, lng) 파라미터가 필요합니다.' });
  } catch (err) {
    res.status(502).json({ error: 'upstream_error', message: String(err) });
  }
}
