import { hasUncaughtExceptionCaptureCallback } from "process";
import React, { useState, useEffect } from "react";
import Products from "../components/Products";

it("sets characts button label 'Characteristics' when characteristics is true", () => {

    const tree = renderer.create(
    <Products onclick={jest.fn}
        />
    );
    expect(tree).toMatchSnapshot();

});


