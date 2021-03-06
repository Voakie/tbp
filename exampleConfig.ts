import { GameConfig } from "./types";

export const exampleConfig: GameConfig = {
    categories: [
        {
            color: "#4287f5",
            name: "Grammatiken",
            questions: [
                {
                    points: 100,
                    text: "Aus welchem Alphabet stammen die Wörter aus \\(L(G)\\), falls \\(G\\) eine beliebige Grammatik ist? \\((G = (N, T, S, P))\\)",
                    solution: "\\(T\\)",
                    id: "1:1"
                },
                {
                    points: 200,
                    text: "Gib eine beliebige kontextfreie Sprache in Mengenschreibweise an (\\( L = \\{...\\} \\))",
                    solution: "Z.b: \\( L = \\varnothing, L = \\{ \\textcolor{blue}{meta} \\}, ... \\)",
                    id: "1:2"
                },
                {
                    points: 300,
                    text: "Gib eine formale Sprache (formal korrekt in Mengenschreibweise) an, die nicht kontextfrei ist",
                    solution: "\\(L_{vv} = \\{ v\\textcolor{blue}{c}v \\mid v \\in \\{\\textcolor{blue}{a}, \\textcolor{blue}{b}\\}^* \\}\\)",
                    id: "1:3"
                }, 
                {
                    points: 400,
                    text: "Gib die kontextfreie Grammatik der Sprache \\( L = \\{ Repr_2(i) \\mid i \\text{ mod } 2 = 0 \\} \\setminus \\{\\textcolor{blue}{0}\\} \\) an. \\((i \\in \\mathbb{N}_0)\\). Führende Nullen seien egal",
                    solution: "\\(G = (\\{S, A, B\\}, \\{\\textcolor{blue}{0}, \\textcolor{blue}{1}\\}, S, P)\\) mit $$P = \\{ S \\rightarrow A\\textcolor{blue}{0}, A \\rightarrow A\\textcolor{blue}{0} \\mid B\\textcolor{blue}{1}, B \\rightarrow B\\textcolor{blue}{0} \\mid B\\textcolor{blue}{1} \\mid \\varepsilon \\}$$",
                    id: "1:4"
                }
            ]
        },
        {
            color: "#54cc60",
            name: "Aussagenlogik",
            questions: [
                {
                    points: 100,
                    text: "Wie viele Interpretationen erfüllen \\(a \\rightarrow b\\)?",
                    solution: "3",
                    id: "2:1"
                },
                {
                    points: 200,
                    text: "Gib eine Interpretation an, die \\((G \\rightarrow H) \\vee (H \\rightarrow G)\\) nicht erfüllt",
                    solution: "Gibt es nicht, die Formel ist eine Tautologie",
                    id: "2:2"
                },
                {
                    points: 300,
                    text: "Erkläre, wie und wozu man den Modus Ponens einsetzt",
                    solution: "Der Modus Ponens ermöglicht es, aus bekannten Wahrheiten Neue zu konstruieren. Gegeben, dass \\( G \\rightarrow H \\) wahr ist und \\(G\\) wahr ist, so muss auch \\(H\\) wahr sein",
                    id: "2:3"
                },
                {
                    points: 400,
                    text: "Vereinfache \\( (a \\vee b) \\wedge (( (d \\rightarrow (b \\vee a)) \\vee (c \\wedge a)) \\wedge ( a \\vee c \\vee b ) \\wedge \\neg(a \\wedge b)) \\wedge \\neg d \\wedge a \\) so weit wie möglich",
                    solution: "\\(a \\wedge \\neg b \\wedge \\neg d\\)",
                    id: "2:4"
                }
            ]
        },
        {
            color: "#e84938",
            name: "Sprachen und Wörter",
            questions: [
                {
                    points: 100,
                    text: "Ist \\(L = \\{\\{\\textcolor{blue}{a}, \\textcolor{blue}{b}\\}^* \\cdot \\{\\textcolor{blue}{c}\\}\\}\\) eine Sprache? Begründe.",
                    solution: "Nein, denn \\(L\\) enthält Mengen und nicht Wörter",
                    id: "3:1"
                },
                {
                    points: 200,
                    text: "Gib die zugehörige Abbildung für das Wort \\(\\textcolor{blue}{hallo}\\) an",
                    solution: "$$w: \\mathbb{Z}_5 \\rightarrow \\{ \\textcolor{blue}{h}, \\textcolor{blue}{a}, \\textcolor{blue}{l}, \\textcolor{blue}{o} \\},\\\\ 0 \\mapsto \\textcolor{blue}{h}, 1 \\mapsto \\textcolor{blue}{a}, ... $$",
                    id: "3:2"
                },
                {
                    points: 300,
                    text: "Gib die Sprache aller Wörter an, die das Teilwort \\(\\textcolor{blue}{meta}\\) nicht enthalten, wobei gilt \\(A = \\{ \\textcolor{blue}{m}, \\textcolor{blue}{e}, \\textcolor{blue}{t}, \\textcolor{blue}{a} \\}\\)",
                    solution: "\\( L = A^* \\setminus (A^* \\cdot \\{ \\textcolor{blue}{meta} \\} \\cdot A^*)  \\)",
                    id: "3:3"
                },
                {
                    points: 400,
                    text: "Gib die Sprache der Palindrome (über einem beliebigen Alphabet) ohne natürliche Sprache an",
                    solution: "\\( L_A = \\{ w \\in A^* \\mid \\forall i \\in \\mathbb{Z}_{|w|}: w(i) = w(|w| - i - 1)  \\} \\)",
                    id: "3:4"
                }
            ]
        },
        {
            color: "#000000",
            name: "MIMA",
            questions: [
                {
                    points: 100,
                    text: "Wie viele Bits fasst der Akku?",
                    solution: "24 Bits",
                    id: "4:1"
                },
                {
                    points: 200,
                    text: "Wie unterscheiden sich \\(\\textbf{LDV}\\) und \\(\\textbf{LDIV}\\) in ihrer Funktionsweise?",
                    solution: "\\(\\textbf{LDV} \\ a\\) lädt von addr(a) $$$$ \\(\\textbf{LDIV} \\ a\\) lädt von addr(addr(a))",
                    id: "4:2"
                },
                {
                    points: 300,
                    text: "Welchen Opcode sollte die Instruktion \\(\\textbf{LDC}\\) haben, damit die Konstante ohne weiteren Aufwand in den Akku geladen werden kann?",
                    solution: "\\(0000_2\\) da der Opcode so die Konstante nicht beeinflusst",
                    id: "4:3"
                },
                {
                    points: 400,
                    text: "Beschreibe die Befehlsholphase im Detail. Nenne alle Register-zu-Register Operationen.",
                    solution: "Befehl aus dem Speicher laden: IAR > SAR, Speicher schreibt nächste Instruktion ins SDR, SDR > IR $$$$ Befehlszeiger inkrementieren: IAR > X, Eins > Y, ALU addiert, Z > IAR",
                    id: "4:4"
                }
            ]
        }
    ]
}