import { Router } from "express";
import { addCharFile, addQuote, submitCode } from "./endpoints/actions";
import { renderAdd, renderAll, renderCodeForm, renderOverview, renderQuote, renderUploadForm } from "./endpoints/views";

export const actionRoutes = Router();
export const viewRoutes = Router();

viewRoutes.get("/", renderOverview);

viewRoutes.get("/quotes/add", renderAdd);
viewRoutes.get("/quotes/all", renderAll);
viewRoutes.get("/quotes/quote/:id", renderQuote);

viewRoutes.get("/char", renderCodeForm);
viewRoutes.get("/char/upload", renderUploadForm);

actionRoutes.post("/addChar", addCharFile);
actionRoutes.post("/addQuote", addQuote);
actionRoutes.post("/submitCode", submitCode);