import { ImageResponse } from "next/og";

export const alt = "Persecution Expert - Persecution Expert Witness UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c1218",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Persecution Expert
        </div>
        <p
          style={{
            marginTop: 32,
            fontSize: 36,
            fontWeight: 600,
            color: "#d66a3a",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Persecution Expert Witness UK
        </p>
      </div>
    ),
    { ...size },
  );
}
