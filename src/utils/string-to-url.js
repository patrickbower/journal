/**
 * @function stringToUrl
 * Convert a string into friendly url
 *
 * @param {string} string
 * @return {string}
 */

export default function stringToUrl(string) {
  return string.replace(/\s+/g, "-").toLowerCase();
}
