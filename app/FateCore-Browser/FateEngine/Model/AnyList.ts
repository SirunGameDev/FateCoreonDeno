export class AnyList {
    [key: number] : any;
    counter : number = 0;

    constructor(...AnyList : any[]) {

        AnyList.forEach(element => {
            this[this.counter] = element;
            this.counter++;
        }); 
    }
    pop() : void {
        delete this[this.counter];
        this.counter--;
    } 
    
    deleteElement(element : any) : void {
        let index = this.find(element);
        if(index != false) {
            delete this[index];
            this.counter--;
        }
    }
    find (element : any) : number|false {
        for(let i = 0; i < this.counter; i++) {
            if(element == this[i]){
                return i;
            }
        }
        return false;
    }

    getArray() : any[] {
        let ReturnArray : any[] = [];
        for(let i = 0; i < this.counter; i++) {
            ReturnArray.push(this[i])
        }
        return ReturnArray;
    } 
}

export default AnyList