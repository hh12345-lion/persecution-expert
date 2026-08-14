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
          backgroundColor: "#f6efe0",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#2c261f",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Persecution Expert
        </div>
        <div
          style={{
            marginTop: 24,
            width: 160,
            height: 3,
            backgroundColor: "#7c2430",
          }}
        />
        <p
          style={{
            marginTop: 28,
            fontSize: 28,
            fontWeight: 500,
            color: "#7c2430",
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
