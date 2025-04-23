import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Routes } from "@adapters/inbound/http/routes/Routes";
import { PrismaService } from "@application/services/PrismaService";
import { Container } from "typedi";

dotenv.config();

const app = express();
export const routes = new Routes();

const prismaService = Container.get(PrismaService);

prismaService.startConnectionCheck();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes.getRouterV1());

export default app;
