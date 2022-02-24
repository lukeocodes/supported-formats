import { describe, it } from "mocha";
import { equal, throws } from "assert";

import { supported } from "./index";

describe("Valid extensions", function () {
  // from the website MP3, MP4, MP2, AAC, WAV, FLAC, M4A, Ogg, Opus, and WebM
  describe(".mp3", function () {
    it(".mp3 should be a valid extension", function () {
      equal(supported("sample.mp3"), true);
    });
  });

  describe(".mp4", function () {
    it(".mp4 should be a valid extension", function () {
      equal(supported("sample.mp4"), true);
    });
  });

  describe(".mp2", function () {
    it(".mp2 should be a valid extension", function () {
      equal(supported("sample.mp2"), true);
    });
  });

  describe(".aac", function () {
    it(".aac should be a valid extension", function () {
      equal(supported("sample.aac"), true);
    });
  });

  describe(".wav", function () {
    it(".wav should be a valid extension", function () {
      equal(supported("sample.wav"), true);
    });
  });

  describe(".flac", function () {
    it(".flac should be a valid extension", function () {
      equal(supported("sample.flac"), true);
    });
  });

  describe(".m4a", function () {
    it(".m4a should be a valid extension", function () {
      equal(supported("sample.m4a"), true);
    });
  });

  describe(".ogg", function () {
    it(".ogg should be a valid extension", function () {
      equal(supported("sample.ogg"), true);
    });
  });

  describe(".opus", function () {
    it(".opus should be a valid extension", function () {
      equal(supported("sample.opus"), true);
    });
  });

  describe(".webm", function () {
    it(".webm should be a valid extension", function () {
      equal(supported("sample.webm"), true);
    });
  });
});

describe("Invalid extensions", function () {
  describe(".txt", function () {
    it(".txt should not be a valid extension", function () {
      throws(
        () => supported("sample.txt"),
        new Error(".txt not a supported extension.")
      );
    });
  });

  describe(".js", function () {
    it(".js should not be a valid extension", function () {
      throws(
        () => supported("sample.js"),
        new Error(".js not a supported extension.")
      );
    });
  });

  describe(".ts", function () {
    it(".ts should not be a valid extension", function () {
      throws(
        () => supported("sample.ts"),
        new Error(".ts not a supported extension.")
      );
    });
  });

  describe(".spec.ts", function () {
    it(".ts spec test should not be a valid extension", function () {
      throws(
        () => supported("sample.spec.ts"),
        new Error(".ts not a supported extension.")
      );
    });
  });
});
