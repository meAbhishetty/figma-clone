import React, { useCallback } from "react";
import LiveCursors from "./cursor/LiveCursors";
import { useMyPresence, useOthers } from "@/liveblocks.config";

const Live = () => {
    const others = useOthers();
    const [{cursor}, updateMyPresence] = useMyPresence() as any;

    const handlePointerMove = useCallback((event: React.PointerEvent)=>{
        event.preventDefault();

        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    }, [])

    return (
        <div>
            <LiveCursors others={others}/>
        </div>
    );
};

export default Live;
