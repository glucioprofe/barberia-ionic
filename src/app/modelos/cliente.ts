export class Cliente {
    id!: string
    nombres!: string
    apellidos!: string
    avatar!: string
    telefono!: string
    email!: string
    setData(data: any){
        this.apellidos = data.apellidos
    }
    getFullname(){
        return this.nombres+ ' ' + this.apellidos
    }
}
