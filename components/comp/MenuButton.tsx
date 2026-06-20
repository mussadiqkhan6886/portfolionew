'use client';

import React, { useState } from 'react'
import MagnetText from '../ui/MagnetEffect'
import Menu from './Menu';

const MenuButton = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <button onClick={() => setIsOpen(true)}>
            <MagnetText mobile={true} dot={"left"} text="Menu" strength={0.5} />
        </button>
        {isOpen && <Menu close={setIsOpen} />}
    </div>
  )
}

export default MenuButton
