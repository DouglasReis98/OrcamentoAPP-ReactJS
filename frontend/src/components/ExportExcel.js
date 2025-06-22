import React from "react";
import ExcelJS from "exceljs";
import style from "./Tabela.module.css";
import { saveAs } from "file-saver";

const ExportExcel = ({ dados, nomeArquivo }) => {
  const exportarParaExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Dados");

    // Definir as colunas com base nas chaves dos objetos
    if (dados.length > 0) {
      const colunas = Object.keys(dados[0]).map((chave) => ({
        header: chave.charAt(0).toUpperCase() + chave.slice(1),
        key: chave,
        width: 20,
      }));
      worksheet.columns = colunas;

      // Adicionar os dados
      dados.forEach((item) => {
        worksheet.addRow({
          Item: item.Item,
          Quantidade: item.Quantidade,
          Preco: parseFloat(item.Preco),
        });
      });

      const primeiraLinhaPlanilha = 2;
      const ultimaLinha = worksheet.lastRow.number;

      for (let i = primeiraLinhaPlanilha; i <= ultimaLinha; i++) {
        const celulaPreco = worksheet.getCell(`C${i}`);
        celulaPreco.numFmt = '"R$ "#,##0.00';
        celulaPreco.alignment = { horizontal: "center" };
      }

      for (let i = primeiraLinhaPlanilha; i <= ultimaLinha; i++) {
        worksheet.getCell(`B${i}`).alignment = { horizontal: "center" };
      }

      // Estilizar o cabeçalho
      worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
        cell.alignment = { horizontal: "center" };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "00000000" },
        };
      });

      // Adiciona a linha "Total"
      const linhaTotal = worksheet.addRow({
        Item: "TOTAL",
      });

      //Inserir fórmula na célula de total
      const celulaTotal = worksheet.getCell(`C${linhaTotal.number}`);
      celulaTotal.value = {
        formula: `SUM(C2:C${ultimaLinha})`,
      };
      celulaTotal.font = { bold: true };
      celulaTotal.alignment = { horizontal: "center" };

      // Estilizar a linha total
      linhaTotal.getCell("A").font = { bold: true };
      linhaTotal.getCell("A").alignment = { horizontal: "center" };
      linhaTotal.eachCell({ includeEmpty: true }, (cell) => {
        cell.font = { bold: true };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "000cff0c" },
        };
      });

      // Mescla as células A e B da linha do total
      worksheet.mergeCells(`A${linhaTotal.number}:B${linhaTotal.number}`);
      worksheet.getCell(`C${linhaTotal.number}`).numFmt = '"R$" #,##0.00';

      // Ajustar automaticamente a largura das colunas
      const ajustarLarguraColunas = (worksheet, larguraMinima = 10) => {
        worksheet.columns.forEach((coluna) => {
          let comprimentoMaximo = larguraMinima;
          coluna.eachCell({ includeEmpty: true }, (celula) => {
            const valor = celula.value;
            if (valor) {
              const comprimento = valor.toString().length;
              if (comprimento > comprimentoMaximo) {
                comprimentoMaximo = comprimento;
              }
            }
          });

          coluna.width = comprimentoMaximo + 2; // Adiconar um pequeno buffet
        });
      };
      ajustarLarguraColunas(worksheet);
      // Gerar o arquivo Excel
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, `${nomeArquivo || "dados"}.xlsx`);
    } else {
      alert("Insira itens no orçamento!");
    }
  };

  return (
    <>
      <button id={style.baixar} onClick={exportarParaExcel}>
        Baixar Planilha do Excel
      </button>
    </>
  );
};

export default ExportExcel;
