import { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

// Configura Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME as string,
  api_key: process.env.API_KEY_CLOUDINARY as string,
  api_secret: process.env.API_SECRET_KEY_CLOUDINARY as string,
});

export async function POST(req: Request) {
  try {
    const { data, username } = await req.json();

    const uploadResponse = await cloudinary.v2.uploader.upload(data, {
      upload_preset: "todoenbici",
    });

    return NextResponse.json({ url: uploadResponse.url });
  } catch (error) {
    console.error("Error uploading image:", error);
  }
}
