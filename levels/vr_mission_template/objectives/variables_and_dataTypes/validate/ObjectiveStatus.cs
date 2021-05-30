using System;


namespace Validate
{
    static class ObjectiveStatus
    {

        public static string Feedback { get; set; }
        public static SCORE Score { get; set; }


        
    }
    public enum SCORE
    {
        PASS,
        FAIL
    }
}
