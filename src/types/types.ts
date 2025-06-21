export interface Pokemon {
  name: string;
  number: number;
  type: string[];
  image_url?: string;
  hp?: number;
  atk?: number;
  def?: number;
  spd?: number;
  captured?: boolean;
  id: string;
}
