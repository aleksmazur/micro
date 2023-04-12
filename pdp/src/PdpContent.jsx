import { getInfoById } from 'home/info';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function PdpContent () {
    const { id } = useParams();

    const [char, setChar] = useState(null);

    useEffect(() => {
        if (id) {
            getInfoById(id).then((data) => setChar(data));
        } else {
            setChar(null);
        }
    }, [id]);

    return ( char &&
        <div className="grid grid-cols-2 gap-5">
        <div>
          <img src={char.image} alt='photo' />
        </div>
        <div>
          <div className="flex">
            <h1 className="font-bold text-3xl flex-grow">{char.name}</h1>
          </div>
          <div className="mt-10">{char.gender}</div>
          <div className="mt-10">{char.location.name}</div>
          <div className="mt-10">{char.status}</div>
          <div className="mt-10">{char.species}</div>
        </div>
      </div>
    )
}