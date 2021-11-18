import React, { useEffect, useState } from "react";

export const useUserMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};
