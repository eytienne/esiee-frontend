export declare type PERSO_TYPE = 'gentil' | 'mechant';

export declare interface Personnage {
  id: number;
  name: string;
  type: PERSO_TYPE;
}
