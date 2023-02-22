import * as React from 'react';
import Card from '../card/Card';
import { BlogData } from "../../../types";
import makeRequest from "../../../utils/makeRequest";
import { GET_BLOG_DATA } from "../../../constants/apiEndPoints";
import { useNavigate } from 'react-router-dom';

export default function Container() : JSX.Element{

  const [blogData, setBlogData] = React.useState<BlogData[]>();
  const [error, setError] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA,{},navigate)
      .then((response) => {
        setBlogData(response);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  if (error) {
    return (
      <div className="blogs paddingBody">
        <p>{error}</p>
      </div>
    );
  }

    return blogData ?(
        <div className="blogs paddingBody">
            {
                blogData.map((blog:BlogData)=>{
                    return(
                        <div data-testid="card-test">
                            <Card key = {blog.id} blogData = {blog} />
                        </div>

                    )
                })
            }
        </div>
    ) : (
        <div className="blogs paddingBody">
          <p>Loading...</p>
        </div>
      );
}
