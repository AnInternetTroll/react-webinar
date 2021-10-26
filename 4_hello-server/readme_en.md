# SSR

**S**erver **S**ide **R**endering means generating the HTML code on the server
instead of on the client. If you have a server and you want to save as much
performence as possible then you can generate (and cache) your react output into
HTML which a browser can run much faster than it can run JavaScript. SSR also
allows you to get data on the server side which would otherwise not be available
to the client, such as database queries or the server's OS.

## SEO

**S**earch **E**ngine **O**ptimisations are ways to tell a search engine stuff
like your website's title, description, image, and more! For example if we had a
website where each user had their own profile page we might want to tell a
search engine the user's name, their bio and profile picture, so it shows up
when we look them up on the internet. This data has to be generated without
client side JavaScript. Google's
[LightHouse](https://developers.google.com/web/tools/lighthouse) can even give
you a score from 0 to 100 on this metric.
