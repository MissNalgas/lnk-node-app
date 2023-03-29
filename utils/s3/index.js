const { S3Client, CreateMultipartUploadCommand, PutObjectCommand } = require('@aws-sdk/client-s3');
const credentials = require('../../secret/awsCredentials');
const client = new S3Client({credentials, region: 'us-east-1'});
const BUCKET_NAME = 'mssnpublic';

/**
*
*  Uploads a file to the S3 bucket
*
*  @param buffer A buffer with the data to be stored
*  @param key The key or filename used in the bucket
*  @param mimetype Type of the object
* 
*/
async function uploadFile(key, buffer, mimetype) {
	const response = await client.send(new PutObjectCommand({
		Body: buffer,
		Bucket: BUCKET_NAME,
		Key: key,
		ContentType: mimetype
	}));

	return `https://public.mssnapps.com/${key}`;
}


module.exports = {
	uploadFile
};
