// import Variable from "./variable.md";
import KeywordsAndVariable from './keywordsAndIdentifier.md';
import DataType from './dataType.md';
import Function1 from './function.md';
import stringMethod from './stringMethod.md';

const python = {
  name: 'Python',
  articles: [
    {
      id: 'string_method_python',
      content: stringMethod,
      heading: 'String Method',
    },
    {
      id: 'function_in_python',
      content: Function1,
      heading: 'Function',
    },
    {
      id: 'datatypes_in_python',
      content: DataType,
      heading: 'Data Types',
    },
    {
      id: 'keywords_and _identifier_in_python',
      content: KeywordsAndVariable,
      heading: 'Keywords and Identifier',
    },

    // {
    //   id: "variable",
    //   content: Variable,
    //   heading: "Know python Variable",
    // },
  ],
};

export default python;
