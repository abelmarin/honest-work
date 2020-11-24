import React, { useState, useContext } from 'react';
import { useHistory  } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState.js';

export const Privacy = () => {
  return (
      <div class="paragraph">
        <h4>Team Solutions</h4>
            <ui class="list-unstyled">
              <li>312-943-3800</li>
              <li>Chicago, Illinois</li>
              <li>600 North State Street</li>
            </ui>
      </div>
  ); 
}
export default Privacy;