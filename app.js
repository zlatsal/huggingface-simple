import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HF_TOKEN

const inference = new HfInference(HF_ACCESS_TOKEN);

const model = "nlpconnect/vit-gpt2-image-captioning";
const imageUrl = "https://i2-prod.dailyrecord.co.uk/incoming/article6602314.ece/ALTERNATES/s1227b/monkeys.jpg";

const response = await fetch(imageUrl);
const imageBlob = await response.blob();

const result = await inference.imageToText({
	data: imageBlob,
	model: model,
});

console.log(result);
