(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    public id: string; 
    public type: HtmlType;
    constructor(id: string,type: HtmlType) {
      this.id = id;
      this.type = type;
    }
  }
  class InputAttributes{
    public value: string;
    public placeholder: string;
    constructor(value: string, placeholder: string) {
      this.placeholder = placeholder;
      this.value = value;
    }
  }
  
  interface InputElementProps{
    value: string;
    placeholder: string;
    id: string;
  }
  class InputEvents{
    constructor(){}
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  class InputElement{
    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;
    constructor({value, placeholder, id }:InputElementProps) {
      this.html = new HtmlElement(id,'input');
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }

  }

  const nameField = new InputElement({value:"Fernando",placeholder:"Enter first name", id:"txtName"});

  console.log({ nameField });
})();
