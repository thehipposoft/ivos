export default async function getFeed() {
    const response = await fetch(`https://wp.thehipposoft.com/wp-json/hippo/v1/token?website=ivos`, {
        headers: {
            'x-api-key': process.env.WORDPRESS_API_SECRET!,
        },
    });
    const data = await response.json();
    const token = data.token;

<<<<<<< Updated upstream
    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&limit=6&access_token=${token}`);
    const resJson = await res.json();
=======
  if (!token) throw new Error("Instagram token is missing");

  const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&limit=6&access_token=${token}`);
>>>>>>> Stashed changes

    if (!res.ok) {
        throw new Error('Failed to fetch Instagram feed');
    }

    return resJson.data;
}
