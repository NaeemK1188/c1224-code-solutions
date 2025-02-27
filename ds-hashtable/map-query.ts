import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  // output variable set is a hash table and map as well
  const docs = new Set<Document>(); // starting with empty set
  // set is a list but unique
  const words = query.toLocaleLowerCase().match(/\b(\w+)\b/g);
  words?.forEach((word) => {
    const tDocs = index.get(word); // if the word not in index(hash table) it will be undefined
    tDocs?.forEach((d) => docs.add(d)); // for this query return those documents
  });

  return docs;
}
