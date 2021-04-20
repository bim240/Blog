// import Variable from "./variable.md";
import KeywordsAndVariable from "./keywordsAndIdentifier.md";
import DataType from "./dataType.md";
import Function1 from "./function.md";
import stringMethod from "./stringMethod.md";

const python = {
  name: "Python",
  articles: [
    {
      id: "stringmethod",
      content: stringMethod,
      heading: "String Method",
    },
    {
      id: "function",
      content: Function1,
      heading: "Function",
    },
    {
      id: "datatypes",
      content: DataType,
      heading: "Data Types",
    },
    {
      id: "keywords&identifier",
      content: KeywordsAndVariable,
      heading: "Keywords and Identifier",
    },

    // {
    //   id: "variable",
    //   content: Variable,
    //   heading: "Know python Variable",
    // },
  ],
};

export default python;
