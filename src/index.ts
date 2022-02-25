// import { lookup } from "mime-types";
import { extname } from "path";

export const extentions: string[] = [
  ".3ga",
  ".3gp",
  ".3gpp",
  ".aac",
  ".aif",
  ".aifc",
  ".aiff",
  ".amr",
  ".flac",
  ".m4a",
  ".m4b",
  ".m4p",
  ".mkv",
  ".mov",
  ".mp2",
  ".mp3",
  ".mp4",
  ".mpg",
  ".mpga",
  ".ogg",
  ".opus",
  ".wav",
  ".weba",
  ".webm",
  ".wma",
  ".wmv",
];

// export const mimetypes: string[] = [
//   "application/ogg",
//   "audio/3ga",
//   "audio/aac",
//   "audio/amr",
//   "audio/flac",
//   "audio/mp4",
//   "audio/mp4a-latm",
//   "audio/mpeg",
//   "audio/ogg",
//   "audio/wave",
//   "audio/webm",
//   "audio/x-aac",
//   "audio/x-aiff",
//   "audio/x-flac",
//   "audio/x-ms-wma",
//   "audio/x-wav",
//   "video/3gpp",
//   "video/mp4",
//   "video/mpeg",
//   "video/quicktime",
//   "video/quicktime",
//   "video/webm",
//   "video/x-matroska",
//   "video/x-ms-wmv",
// ];

export function supported(file: string): boolean {
  const extention = extname(file);
  // const mimetype = lookup(file);

  // if (!mimetype) throw Error(`Could not read mimetype from ${file}.`);

  if (!extentions.includes(extention)) {
    throw Error(`${extention} not a supported extension.`);
  }

  // if (!mimetypes.includes(mimetype))
  //   throw Error(`${mimetype} not a supported mimetype.`);

  return true;
}

export default supported;
