import axios from "axios";

const SPREADSHEET_ID = "17s_8s63YfrBOnwt6XCvaxv5p2j7qyX2fn-rLvgYbMcI";

// Add the GIDs of all tabs here
const SHEET_TABS = [
  { name: "Basin of Unnumbered Flames", gid: "0" },
  { name: "Coatepec Mountain", gid: "1906609379" }, // Replace with actual gid
  { name: "Ochkanatlan", gid: "157637649" },      // Replace with actual gid
  { name: "Quahuacan Cliff", gid: "1416368720" },
  { name: "Tequemecan Valley", gid: "575559977" },
  { name: "Tezcatepetonco Range", gid: "2106671929" },
  { name: "Toyac Springs", gid: "217540927" },
  // Add more tabs as needed
];

export async function GET() {
  try {
    const dataPromises = SHEET_TABS.map((tab) =>
      axios
        .get(
          `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&gid=${tab.gid}`
        )
        .then((res) => ({
          name: tab.name,
          data: res.data,
        }))
    );

    const sheetsData = await Promise.all(dataPromises);

    return new Response(JSON.stringify(sheetsData), { status: 200 });
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return new Response("Failed to fetch data", { status: 500 });
  }
}
