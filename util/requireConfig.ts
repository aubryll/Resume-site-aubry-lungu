import MissingConfigurationValueError from "@util/errors/MissingConfigurationValueError";
import { NonUndefined, ValueOf } from "@util/types";

const requireConfig = <T>(isomorphicConfig: T, key: keyof T) => {
  const valueUnderKey = isomorphicConfig[key];

  if (typeof valueUnderKey === "undefined") {
    throw new MissingConfigurationValueError(
      `Value for configuration key ${String(key)} was undefined.`
    );
  }

  return valueUnderKey as NonUndefined<ValueOf<T>>;
};

export default requireConfig;
