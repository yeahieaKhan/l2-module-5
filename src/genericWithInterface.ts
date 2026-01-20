interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  message: "Success",
  data: {
    name: "Rahim",
    age: 25,
  },
};

const numberResponse: ApiResponse<number[]> = {
  status: 200,
  message: "OK",
  data: [1, 2, 3, 4],
};

