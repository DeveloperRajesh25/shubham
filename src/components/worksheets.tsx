import { readdir } from "fs/promises";
import { join } from "path";
import { WorksheetsClient } from "@/components/worksheets-client";

interface WorksheetCategory {
  name: string;
  images: string[];
}

async function getWorksheetCategories(): Promise<WorksheetCategory[]> {
  try {
    const worksheetsDir = join(process.cwd(), "public/worksheets");
    const entries = await readdir(worksheetsDir, { withFileTypes: true });

    const categories = await Promise.all(
      entries
        .filter((entry) => entry.isDirectory())
        .map(async (entry) => {
          const categoryPath = join(worksheetsDir, entry.name);
          const files = await readdir(categoryPath);
          const images = files
            .filter((file) => /\.(jpeg|jpg|png|gif|webp)$/i.test(file))
            .sort()
            .map((file) => `/worksheets/${entry.name}/${file}`);

          return {
            name: entry.name,
            images,
          };
        })
    );

    return categories;
  } catch (error) {
    console.error("Error reading worksheets:", error);
    return [];
  }
}

export async function Worksheets() {
  const categories = await getWorksheetCategories();
  return <WorksheetsClient categories={categories} />;
}
