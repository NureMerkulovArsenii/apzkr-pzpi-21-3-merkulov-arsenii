export interface MenuItem {
  id: number;
  name: string;
  icon: string | null;
  url: string | null;
  parentId: number | null;
}
