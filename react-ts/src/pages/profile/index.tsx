import { useEffect, useState } from "react";
import PageHeader from "../../components/global/PageHeader";
import { DUMMY_BASE_URL } from "../../constants";
import type { User } from "../../types/user";

const Profile = () => {

  const [user, setUser] = useState<User | null>(null);

  const getMeApi = async () => {
    const res = await fetch(`${DUMMY_BASE_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Pass JWT via Authorization header
      }
    });
    const data = await res.json();
    return data;
  }

  const getMeData = async () => {
    const data = await getMeApi();
    setUser(data);
  }

  useEffect(() => {
    getMeData();
  }, [])

  return (
    <>
      <PageHeader text="Profile" />
      <div className="flex gap-4">
        <figure className="w-30 h-30 border-2 border-gray-600 p-2 rounded-lg bg-slate-800">
          <img src={user?.image} alt={user?.firstName} className="w-full" />
        </figure>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold">{user?.firstName} {user?.lastName}</h2>
          <h3 className="text-xl">{user?.email}</h3>
          <h3 className="text-xl capitalize">{user?.gender}</h3>
        </div>
      </div>
    </>
  )
}

export default Profile