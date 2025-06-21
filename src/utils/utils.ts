import {
  LABEL_CAPTURE,
  LABEL_CAPTURED,
  LABEL_CAPTURING,
} from "../constants/pokemon";

export const getCaptureButtonLabel = (
  captured: boolean | undefined,
  isCapturing: boolean | undefined
): string =>
  captured ? LABEL_CAPTURED : isCapturing ? LABEL_CAPTURING : LABEL_CAPTURE;
