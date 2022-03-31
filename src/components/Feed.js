import React, { useEffect, useState } from "react";
import FeedTop from "./FeedTop";
import FeedContents from "./FeedContents";
import { dbService } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Feed() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(collection(dbService, "questions"), orderBy("timestamp", "desc")),
      (snapshot) => {
        const FeedArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          question: doc.data(),
        }));
        setFeeds(FeedArray);
      }
    );
  }, []);

  return (
    <div className="flex flex-[0.6] flex-col">
      <FeedTop />
      {feeds.map(({ id, question }) => (
        <FeedContents
          key={id}
          Id={id}
          image={question.imageUrl}
          question={question.question}
          timestamp={question.timestamp}
          quoraUser={question.user}
        />
      ))}
    </div>
  );
}

export default Feed;
