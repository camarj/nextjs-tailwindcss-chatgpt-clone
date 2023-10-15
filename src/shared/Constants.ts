import { OpenAIModel } from "@/types/Model";

export const LS_UUID = "@ls/uuid";

export const DEFAULT_OPENAI_MODEL = {
  name: "Intellia Model-0.1",
  id: "ft:gpt-3.5-turbo-0613:diftinto::89jJvh4U",
  available: true,
};

export const GPT3_OPENAI_MODEL = {
  name: "GPT-3.5",
  id: "gpt-3.5-turbo",
  available: true,
};

export const GPT4_OPENAI_MODEL = {
  name: "GPT-4",
  id: "gpt-4",
  available: true,
};

export const OPENAI_MODELS: OpenAIModel[] = [
  DEFAULT_OPENAI_MODEL,
  GPT4_OPENAI_MODEL,
];
