import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
            <div className="bg-[#2A2634] px-8 py-3 flex justify-between items-center">
                <div>
                    <strong className="text-2xl text-white font-black block">
                        Não encontrou seu Duo?
                    </strong>
                    <span className="text-zinc-400 block">
                        Publique um anuncio para encontrar novos players!
                    </span>
                </div>

                <Dialog.Trigger className="bg-violet-600 text-white hover:bg-violet-700 rounded-lg flex gap-3 items-center p-4 ">
                    <MagnifyingGlassPlus size={24} />
                    Publicar Anúncio
                </Dialog.Trigger>
            </div>
        </div>
    );
}
