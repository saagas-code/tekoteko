import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import config from "../../../config";

const s3config: S3ClientConfig = {
  region: config.AWS_DEFAULT_REGION,
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY_ID!,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY!,
  },
};
const S3 = new S3Client(s3config);

export default S3