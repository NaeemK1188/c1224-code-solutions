import { getJSDocReadonlyTag } from 'typescript';

export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  // creating the output which is the index hash table with
  // key of words, value is document containing the list of words
  // Map is a hash table
  // index is at the end of the book, where page number and page content
  const index = new Map<string, Set<Document>>(); // () empty hash table
  docs.forEach((doc) => {
    const words = doc.content.toLocaleLowerCase().match(/\b(\w+)\b/g);
    words?.forEach((w) => {
      // map the word to an new set
      // get() returns a value
      // index is a map or hash table
      // indocs  list of all documents containing the word
      const wDocs = index.get(w); //
      // <key, value>
      if (!wDocs) {
        index.set(w, new Set<Document>([doc]));
      } else {
        wDocs.add(doc); // updating adding to the document
      }
    });
  });
  return index;
}
