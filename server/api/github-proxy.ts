import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const query = getQuery(event);
  const githubUrl = query.q as string;

  if (!githubUrl) {
    return {
      statusCode: 400,
      message: "Missing GitHub URL",
    };
  }

  const expBlob = /^(?:https?:\/\/)?github\.com\/.+?\/.+?\/(?:blob|raw)\/.*$/i;
  const expRaw =
    /^(?:https?:\/\/)?raw\.(?:githubusercontent|github)\.com\/.+?\/.+?\/.+?\/.+$/i;

  let downloadUrl = githubUrl;

  if (expBlob.test(githubUrl)) {
    downloadUrl = githubUrl.replace("/blob/", "/raw/");
  } else if (!expRaw.test(githubUrl)) {
    return {
      statusCode: 400,
      message: "Invalid GitHub URL",
    };
  }

  try {
    const response = await fetch(downloadUrl);

    if (!response.ok) {
      return {
        statusCode: response.status,
        message: "Failed to fetch the file",
      };
    }

    const contentType =
      response.headers.get("content-type") || "application/octet-stream";
    const fileName = downloadUrl.split("/").pop() || "downloaded-file.txt";

    const headers = new Headers({
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
    });

    return new Response(response.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
});
