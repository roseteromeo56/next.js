export function absoluteURL(url) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${url}`;
}

const INTERNAL_URL_ORIGIN = "https://example.com";

export function internalPath(path) {
  if (
    typeof path !== "string" ||
    !path.startsWith("/") ||
    path.startsWith("//")
  ) {
    return "/";
  }

  try {
    const url = new URL(path, INTERNAL_URL_ORIGIN);

    if (url.origin !== INTERNAL_URL_ORIGIN) {
      return "/";
    }

    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return "/";
  }
}
