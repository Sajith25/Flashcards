import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {} 
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic(state, action) {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: [] 
      };
    },
    addQuizToTopic(state, action) {
      const { quizId, topicId } = action.payload;
      // Check if the topicId exists before updating quizIds
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(quizId);
      } else {
        console.error(`Topic with id ${topicId} does not exist.`);
      }
    }
  }
});

export const { addTopic, addQuizToTopic } = topicsSlice.actions;

export const selectTopics = state => state.topics.topics;

export default topicsSlice.reducer;