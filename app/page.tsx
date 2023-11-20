"use client";

import { ScrollToTop } from "@/components/scroll-to-top";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  return (
    <main className="px-4 flex items-center justify-center max-w-screen-2xl m-auto">
      <div className="flex flex-col gap-8 md:flex-row lg:mt-48">
        <Card className="w-[350px] flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Biblioteca Magic</CardTitle>
            <CardDescription className="flex gap-8 items-center">
              Projeto em construção...
            </CardDescription>
          </CardHeader>
          <CardContent>
            A ideia desse projeto é reunir todas as regras, coleções e cartas de
            magic em um só lugar.
          </CardContent>
          <CardFooter className="flex">
            Projeto para fins de estudo
          </CardFooter>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Implementações futuras</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Alert>
              <Loader2 className="animate-spin" />
              <AlertTitle>Menu funcional</AlertTitle>
            </Alert>
            <Alert>
              <Loader2 className="animate-spin" />
              <AlertTitle>Logo</AlertTitle>
            </Alert>
            <Alert>
              <Loader2 className="animate-spin" />
              <AlertTitle>Páginas de regras do jogo</AlertTitle>
            </Alert>
            <Alert>
              <Loader2 className="animate-spin" />
              <AlertTitle>Página de cartas com filtragem</AlertTitle>
            </Alert>
            <Alert>
              <Loader2 className="animate-spin" />
              <AlertTitle>Página para cada carta contento todas as suas especificações</AlertTitle>
            </Alert>
          </CardContent>
        </Card>
      </div>
      <ScrollToTop />
    </main>
  );
}
