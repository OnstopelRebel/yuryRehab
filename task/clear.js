import { deleteAsync } from "del";
import path from "../config/path.js";

// Удаление директории

export default () => {
  return deleteAsync(path.root);
}
