/**
 * Created by Nicolas on 09/09/2016.
 */
export class Compte {
    private static num = 10;
    public id: number = ++Compte.num;
    public operations: Object[] = [];

    constructor(
        public numero: string,
        public intitule?: string
    ) { }
}
