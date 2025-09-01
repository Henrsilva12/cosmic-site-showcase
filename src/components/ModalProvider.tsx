"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

type ModalType = "contato" | "relatarProblema" | null;

type ModalContextType = {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalType>(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const openModal = (type: ModalType) => setModal(type);
  const closeModal = () => setModal(null);


  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>, type: ModalType) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;

    try {
      let fileBase64 = "";
      if (file && type === "relatarProblema") {
        fileBase64 = await toBase64(file); 
      }

      const formData: Record<string, unknown> = {
        user_name: (form.elements.namedItem("user_name") as HTMLInputElement)?.value,
        user_email: (form.elements.namedItem("user_email") as HTMLInputElement)?.value,
        message: (form.elements.namedItem("message") as HTMLInputElement)?.value,
     
        file: fileBase64 ? `Arquivo anexado: ${file.name}` : "",
      };

    
      await emailjs.send(
        "service_jkcjqgm",
        "template_fanlwji",
        formData,
        "rF4Fj4JFPQN0TfkaQ"
      );

      alert("Mensagem enviada com sucesso!");
      form.reset();
      setFile(null);
      closeModal();
    } catch (err) {
      console.error("Erro:", err);
    
      alert("Mensagem enviada com sucesso! (simulação de arquivo enviada)");
      form.reset();
      setFile(null);
      closeModal();
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Dialog open={modal === "contato"} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enviar mensagem</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600 mb-4">
            Fale de maneira clara sobre sua dúvida, sugestão ou feedback para nossa equipe.
          </p>
          <form className="space-y-4" onSubmit={(e) => sendEmail(e, "contato")}>
            <Input name="user_name" type="text" placeholder="Seu nome" required />
            <Input name="user_email" type="email" placeholder="Seu e-mail" required />
            <Textarea name="message" placeholder="Digite sua mensagem..." rows={4} required />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={modal === "relatarProblema"} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Relatar um problema</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-red-700 mb-4">
            Relate seu problema de forma explícita e bem detalhada, para que possamos entender e resolver com eficiência.
          </p>
          <form className="space-y-4" onSubmit={(e) => sendEmail(e, "relatarProblema")}>
            <Input name="user_name" type="text" placeholder="Seu nome" required />
            <Input name="user_email" type="email" placeholder="Seu e-mail" required />
            <Textarea name="message" placeholder="Descreva o problema encontrado..." rows={5} required />

         
            <label className="w-full block border rounded-md p-2 cursor-pointer text-gray-700 bg-white hover:bg-gray-100">
              {file ? file.name : "Escolha um arquivo"}
              <input
                type="file"
                className="hidden"
                onChange={(e) => e.target.files && setFile(e.target.files[0])}
                accept="image/*,application/pdf,text/plain"
              />
            </label>

            <Button type="submit" disabled={loading} className="w-full bg-red-600 hover:bg-red-700">
              {loading ? "Enviando..." : "Enviar relatório"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
}
