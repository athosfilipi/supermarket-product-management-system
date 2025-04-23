import { PrismaClient } from "@prisma/client";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
import { Service } from "typedi";

@Service()
export class PrismaService {
  private prisma: PrismaClient;
  private checkInterval: NodeJS.Timeout | null = null;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async checkDatabaseConnection() {
    try {
      await this.prisma.$connect();
      console.log("Conexão com o banco de dados bem-sucedida.");
      this.stopConnectionCheck();
    } catch (error) {
      console.error("‼► Erro ao conectar ao banco de dados");
      if (error instanceof PrismaClientInitializationError) {
        console.error("Tentando reconectar...");
        this.startConnectionCheck();
      }
    }
  }

  async startConnectionCheck(interval: number = 3000) {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }

    this.checkInterval = setInterval(async () => {
      await this.checkDatabaseConnection();
    }, interval);
  }

  stopConnectionCheck() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }

  async disconnect() {
    await this.prisma.$disconnect();
    this.stopConnectionCheck();
  }

  get client() {
    return this.prisma;
  }
}
