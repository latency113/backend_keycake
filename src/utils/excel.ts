import ExcelJS from "exceljs"

export type LNGInventoryRow = {
    date: string
    opening_inventory_mmscf: number
    opening_inventory_bbtus: number
    lng_send_out_mmscfd: number
    lng_send_out_bbtu: number
    term_spot_unload_mmscf: number
    term_spot_unload_bbtu: number
    note: string
    trade_mmscf: number
    trade_mmbtus: number
    aiu: number
    plan: number
}

export type LNGInventorySheet = {
    meta: {
        shipper_name: string
        version_date: string
        terminal: string
        unit: string
        info_date: string
    }
    data: LNGInventoryRow[]
}

export default async function readExcelfile(filePath: string): Promise<Record<string, LNGInventorySheet>> {
    const workbook = new ExcelJS.Workbook()
    await workbook.xlsx.readFile(filePath)

    const result: Record<string, LNGInventorySheet> = {}

    workbook.eachSheet((worksheet) => {
        // ✅ Meta info
        const shipper_name = String(worksheet.getRow(1).getCell("C").value || "")
        const version_date = String(worksheet.getRow(2).getCell("B").value || "")
        const terminal = String(worksheet.getRow(1).getCell("D").value || "")
        const unit = String(worksheet.getRow(2).getCell("D").value || "")
        const info_date = String(worksheet.getRow(1).getCell("P").value || "")

        const meta = { info_date, shipper_name, terminal, unit, version_date }

        // ✅ Data table
        const rows: LNGInventoryRow[] = []

        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber <= 4)
                return // ข้าม header

            const date = String(row.getCell("B").value || "").toString()
            if (!date)
                return

            rows.push({
                aiu: Number(row.getCell("M").value) || 0,
                date,
                lng_send_out_bbtu: Number(row.getCell("F").value) || 0,
                lng_send_out_mmscfd: Number(row.getCell("E").value) || 0,
                note: String(row.getCell("I").value || "").toString(),
                opening_inventory_bbtus: Number(row.getCell("D").value) || 0,
                opening_inventory_mmscf: Number(row.getCell("C").value) || 0,
                plan: Number(row.getCell("P").value) || 0,
                term_spot_unload_bbtu: Number(row.getCell("H").value) || 0,
                term_spot_unload_mmscf: Number(row.getCell("G").value) || 0,
                trade_mmbtus: Number(row.getCell("K").value) || 0,
                trade_mmscf: Number(row.getCell("J").value) || 0,
            })
        })

        result[worksheet.name] = { data: rows, meta }
    })

    return result
}